resource "google_service_account" "external_dns" {
  account_id   = "external-dns"
  display_name = "Service account for ExternalDNS"
}

resource "google_project_iam_member" "external_dns" {
  member = "serviceAccount:${google_service_account.external_dns.email}"
  role   = "roles/dns.admin"
}

resource "google_service_account_key" "external_dns" {
  service_account_id = google_service_account.external_dns.name
}

resource "kubernetes_secret" "external_dns" {
  metadata {
    name = "external-dns"
  }

  data = {
    "credentials.json" = base64decode(google_service_account_key.external_dns.private_key)
  }
}

resource "helm_release" "external_dns" {
  name  = "external-dns"
  chart     = "stable/external-dns"
  version   = "v2.6.4"

  values = [
    <<-EOF
    provider: google

    EOF
  ]
}
