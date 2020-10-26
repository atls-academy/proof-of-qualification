terraform {
  backend "remote" {
    organization = "dummy"

    workspaces {
      prefix = "atlantis-infrastructure-"
    }
  }
}
