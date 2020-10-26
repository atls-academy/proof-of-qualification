resource "google_compute_network" "default" {
  name                    = terraform.workspace
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "default" {
  name          = terraform.workspace
  ip_cidr_range = "10.2.0.0/16"

  region  = data.google_client_config.default.region
  network = google_compute_network.default.self_link

  secondary_ip_range {
    range_name    = "pods"
    ip_cidr_range = "192.168.0.0/18"
  }

  secondary_ip_range {
    range_name    = "services"
    ip_cidr_range = "192.168.64.0/18"
  }
}
