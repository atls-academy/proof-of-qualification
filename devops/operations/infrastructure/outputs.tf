output "gcr_keyfile" {
  value = base64decode(google_service_account_key.gcr_ci.private_key)
}
