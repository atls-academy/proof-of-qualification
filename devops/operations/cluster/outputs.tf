output "ca_certificate" {
  value = module.gke.ca_certificate
}

output "endpoint" {
  value = "https://${module.gke.endpoint}"
}
