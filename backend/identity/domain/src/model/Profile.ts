import { Address }             from './Address'
import { ContactInformation }  from './ContactInformation'
import { PersonalInformation } from './PersonalInformation'
import { ProfileType }         from './ProfileType'

export class Profile {
  type: ProfileType

  personalInformation: PersonalInformation

  contactInformation: ContactInformation

  address: Address

  website: string

  constructor(type: ProfileType, personalInformation: PersonalInformation) {
    this.type = type
    this.personalInformation = personalInformation
  }

  changePersonalInformation(personalInformation: PersonalInformation) {
    this.personalInformation = personalInformation
  }

  changeContactInformation(contactInformation: ContactInformation) {
    this.contactInformation = contactInformation
  }

  changeAddress(address: Address) {
    this.address = address
  }

  changeWebsite(website: string) {
    this.website = website
  }
}
