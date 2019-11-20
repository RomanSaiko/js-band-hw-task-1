import TransportItem from './TransportItem.js';

export default class Ship extends TransportItem {
    constructor(id, model, name, producedYear, capacity, averageSpeed, countOfTeam) {
        super(id, model ,producedYear, capacity, averageSpeed);
        this._countOfTeam = countOfTeam;
        this._name = name;
    }

    get showAverageSpeed() {
        return `${this._averageSpeed} nm`;
    }
}