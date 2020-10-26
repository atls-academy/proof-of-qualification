data "terraform_remote_state" "cluster" {
  backend = "remote"

  config = {
    organization = "dummy"

    workspaces = {
      name = "atlantis-test-stage"
    }
  }
}

data "google_client_config" "default" {
}

data "aws_region" "current" {}
