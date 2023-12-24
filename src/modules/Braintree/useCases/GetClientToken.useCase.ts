import Braintree from "@/services/Braintree";

export default class GetClientTokenUseCase {
  async execute(customerId: string) {
    const braintree = new Braintree();

    return braintree.generateClientToken(customerId);
  }
}
