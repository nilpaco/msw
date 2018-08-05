export class Spot {
	public id: number;
	public name: string;
	public _selected: boolean;

	constructor() {}

	setSpot(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}
