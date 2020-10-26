terraform {
  backend "remote" {
    organization = "dummy"

    workspaces {
      prefix = "atlantis-test-"
    }
  }
}

provider "google" {}
