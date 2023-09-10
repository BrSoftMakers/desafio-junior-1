import IMask from './holder.js';

/** Provides details of changing model value */
class ChangeDetails {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */

  static normalize(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  constructor(details) {
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }

  /** Aggregate changes */
  aggregate(details) {
    this.rawInserted += details.rawInserted;
    this.skip = this.skip || details.skip;
    this.inserted += details.inserted;
    this.tailShift += details.tailShift;
    return this;
  }

  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
}
IMask.ChangeDetails = ChangeDetails;

export { ChangeDetails as default };
