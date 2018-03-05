export class CounterService {
  activeToInactiveCnt = 0;
  inactiveToActiveCnt = 0;

  incActiveToInactive() {
    this.activeToInactiveCnt++;
    console.log('active to inactive' + this.activeToInactiveCnt);
  }

  incInactiveToActive() {
    this.inactiveToActiveCnt++;
    console.log('Inactive to active' + this.inactiveToActiveCnt);
  }
}
