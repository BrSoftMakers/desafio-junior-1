interface PetDataInterface {
  id: string | null;
  name: string;
  breed: string;
  birth: Date;
  petType: string;

  ownerName: string;
  ownerPhone: string;
}

export class PetData {
  public readonly id: string | null;
  public name: string;
  public breed: string;
  public petType: string;
  public birth: Date;

  public ownerName: string;
  public ownerPhone: string;

  constructor(props: PetDataInterface) {
    Object.assign(this, props);
  }
}
