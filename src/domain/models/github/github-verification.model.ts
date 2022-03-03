export interface IGithubVerificationModel {
  verified: boolean;
  reason: string;
  payload: string | null;
  signature: string | null;
}
