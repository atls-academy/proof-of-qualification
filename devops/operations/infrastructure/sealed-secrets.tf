data "helm_repository" "stable" {
  name = "stable"
  url  = "https://kubernetes-charts.storage.googleapis.com"
}

resource "helm_release" "sealed_secrets" {
  repository = data.helm_repository.stable.name
  chart      = "stable/sealed-secrets"
  name       = "sealed-secrets"
  namespace  = "kube-system"
}
