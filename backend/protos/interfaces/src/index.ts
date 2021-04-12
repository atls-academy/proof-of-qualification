import * as grpc      from 'grpc'
import { Observable } from 'rxjs'
/** Namespace common. */
export namespace common {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {}

  /** Builder for an RPC service server. */
  export interface ServerBuilder {}

  /** Properties of an Empty. */
  export interface Empty {}

  /** Properties of a Pager. */
  export interface Pager {
    /** Pager take */
    take?: number | null

    /** Pager offset */
    offset?: number | null
  }

  /** Properties of an Order. */
  export interface Order {
    /** Order by */
    by?: string | null

    /** Order direction */
    direction?: string | null
  }

  /** Properties of a PageInfo. */
  export interface PageInfo {
    /** PageInfo hasNext */
    hasNext?: boolean | null
  }
}

/** Namespace identity. */
export namespace identity {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the IdentityService service client.
     */
    getIdentityService(): identity.IdentityService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a IdentityService service implementation.
     * @param impl IdentityService service implementation
     */
    addIdentityService(impl: identity.IdentityService): identity.ServerBuilder
  }

  /** Constructs a new IdentityService service. */
  export interface IdentityService {
    /**
     * Calls register.
     * @param request RegisterRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    register(
      request: identity.RegisterRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.RegisterResponse>

    /**
     * Calls authenticate.
     * @param request AuthenticateRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    authenticate(
      request: identity.AuthenticateRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.AuthenticateResponse>

    /**
     * Calls verifyEmail.
     * @param request VerifyEmailRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    verifyEmail(
      request: identity.VerifyEmailRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.VerifyEmailResponse>

    /**
     * Calls resetPassword.
     * @param request ResetPasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    resetPassword(
      request: identity.ResetPasswordRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.ResetPasswordResponse>

    /**
     * Calls changePassword.
     * @param request ChangePasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changePassword(
      request: identity.ChangePasswordRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.ChangePasswordResponse>

    /**
     * Calls createProfile.
     * @param request CreateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createProfile(
      request: identity.CreateProfileRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.CreateProfileResponse>

    /**
     * Calls getUsers.
     * @param request GetUsersRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getUsers(
      request: identity.GetUsersRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.GetUsersResponse>

    /**
     * Calls updateProfile.
     * @param request UpdateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateProfile(
      request: identity.UpdateProfileRequest,
      metadata?: grpc.Metadata,
    ): Observable<identity.UpdateProfileResponse>
  }

  /** Properties of an Email. */
  export interface Email {
    /** Email address */
    address?: string | null

    /** Email verified */
    verified?: boolean | null
  }

  /** Properties of a PersonalInformation. */
  export interface PersonalInformation {
    /** PersonalInformation firstName */
    firstName?: string | null

    /** PersonalInformation lastName */
    lastName?: string | null
  }

  /** Properties of a Phone. */
  export interface Phone {
    /** Phone number */
    number?: string | null
  }

  /** Properties of an Address. */
  export interface Address {
    /** Address formatted */
    formatted?: string | null
  }

  /** Properties of a ContactInformation. */
  export interface ContactInformation {
    /** ContactInformation phone */
    phone?: identity.Phone | null
  }

  /** Properties of a Profile. */
  export interface Profile {
    /** Profile type */
    type?: string | null

    /** Profile personalInformation */
    personalInformation?: identity.PersonalInformation | null

    /** Profile contactInformation */
    contactInformation?: identity.ContactInformation | null

    /** Profile address */
    address?: identity.Address | null

    /** Profile website */
    website?: string | null
  }

  /** Properties of a User. */
  export interface User {
    /** User id */
    id?: string | null

    /** User email */
    email?: identity.Email | null

    /** User profile */
    profile?: identity.Profile | null
  }

  /** Properties of a VerifyEmailRequest. */
  export interface VerifyEmailRequest {
    /** VerifyEmailRequest token */
    token?: string | null
  }

  /** Properties of a VerifyEmailErrors. */
  export interface VerifyEmailErrors {
    /** VerifyEmailErrors token */
    token?: string | null
  }

  /** Properties of a VerifyEmailResponse. */
  export interface VerifyEmailResponse {
    /** VerifyEmailResponse errors */
    errors?: identity.VerifyEmailErrors | null

    /** VerifyEmailResponse result */
    result?: identity.User | null
  }

  /** Properties of a RegisterRequest. */
  export interface RegisterRequest {
    /** RegisterRequest email */
    email?: string | null

    /** RegisterRequest password */
    password?: string | null

    /** RegisterRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterErrors. */
  export interface RegisterErrors {
    /** RegisterErrors email */
    email?: string | null

    /** RegisterErrors password */
    password?: string | null

    /** RegisterErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterResponse. */
  export interface RegisterResponse {
    /** RegisterResponse errors */
    errors?: identity.RegisterErrors | null

    /** RegisterResponse result */
    result?: identity.User | null
  }

  /** Properties of an AuthenticateRequest. */
  export interface AuthenticateRequest {
    /** AuthenticateRequest email */
    email?: string | null

    /** AuthenticateRequest password */
    password?: string | null
  }

  /** Properties of an AuthenticateErrors. */
  export interface AuthenticateErrors {
    /** AuthenticateErrors email */
    email?: string | null

    /** AuthenticateErrors password */
    password?: string | null
  }

  /** Properties of an AuthenticateResponse. */
  export interface AuthenticateResponse {
    /** AuthenticateResponse errors */
    errors?: identity.AuthenticateErrors | null

    /** AuthenticateResponse result */
    result?: identity.User | null
  }

  /** Properties of a ResetPasswordRequest. */
  export interface ResetPasswordRequest {
    /** ResetPasswordRequest email */
    email?: string | null
  }

  /** Properties of a ResetPasswordErrors. */
  export interface ResetPasswordErrors {
    /** ResetPasswordErrors email */
    email?: string | null
  }

  /** Properties of a ResetPasswordResponse. */
  export interface ResetPasswordResponse {
    /** ResetPasswordResponse errors */
    errors?: identity.ResetPasswordErrors | null
  }

  /** Properties of a ChangePasswordRequest. */
  export interface ChangePasswordRequest {
    /** ChangePasswordRequest token */
    token?: string | null

    /** ChangePasswordRequest password */
    password?: string | null

    /** ChangePasswordRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordErrors. */
  export interface ChangePasswordErrors {
    /** ChangePasswordErrors token */
    token?: string | null

    /** ChangePasswordErrors password */
    password?: string | null

    /** ChangePasswordErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordResponse. */
  export interface ChangePasswordResponse {
    /** ChangePasswordResponse errors */
    errors?: identity.ChangePasswordErrors | null

    /** ChangePasswordResponse result */
    result?: identity.User | null
  }

  /** Properties of a CreateProfileRequest. */
  export interface CreateProfileRequest {
    /** CreateProfileRequest id */
    id?: string | null

    /** CreateProfileRequest type */
    type?: string | null

    /** CreateProfileRequest firstName */
    firstName?: string | null

    /** CreateProfileRequest lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileErrors. */
  export interface CreateProfileErrors {
    /** CreateProfileErrors id */
    id?: string | null

    /** CreateProfileErrors type */
    type?: string | null

    /** CreateProfileErrors firstName */
    firstName?: string | null

    /** CreateProfileErrors lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileResponse. */
  export interface CreateProfileResponse {
    /** CreateProfileResponse errors */
    errors?: identity.CreateProfileErrors | null

    /** CreateProfileResponse result */
    result?: identity.User | null
  }

  /** Properties of a UsersFilter. */
  export interface UsersFilter {
    /** UsersFilter id */
    id?: string[] | null
  }

  /** Properties of a GetUsersRequest. */
  export interface GetUsersRequest {
    /** GetUsersRequest pager */
    pager?: common.Pager | null

    /** GetUsersRequest order */
    order?: common.Order | null

    /** GetUsersRequest filters */
    filters?: identity.UsersFilter | null
  }

  /** Properties of a GetUsersResponse. */
  export interface GetUsersResponse {
    /** GetUsersResponse rows */
    rows?: identity.User[] | null

    /** GetUsersResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an UpdateProfileRequest. */
  export interface UpdateProfileRequest {
    /** UpdateProfileRequest id */
    id?: string | null

    /** UpdateProfileRequest firstName */
    firstName?: string | null

    /** UpdateProfileRequest lastName */
    lastName?: string | null

    /** UpdateProfileRequest phone */
    phone?: string | null

    /** UpdateProfileRequest address */
    address?: string | null

    /** UpdateProfileRequest website */
    website?: string | null
  }

  /** Properties of an UpdateProfileErrors. */
  export interface UpdateProfileErrors {
    /** UpdateProfileErrors id */
    id?: string | null

    /** UpdateProfileErrors firstName */
    firstName?: string | null

    /** UpdateProfileErrors lastName */
    lastName?: string | null

    /** UpdateProfileErrors phone */
    phone?: string | null

    /** UpdateProfileErrors address */
    address?: string | null

    /** UpdateProfileErrors website */
    website?: string | null
  }

  /** Properties of an UpdateProfileResponse. */
  export interface UpdateProfileResponse {
    /** UpdateProfileResponse errors */
    errors?: identity.UpdateProfileErrors | null

    /** UpdateProfileResponse result */
    result?: identity.Profile | null
  }
}
