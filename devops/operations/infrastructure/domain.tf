resource "google_dns_managed_zone" "splato" {
  name        = "atlantis"
  dns_name    = "${var.domain}."
  description = "Atlantis DNS zone"
}
