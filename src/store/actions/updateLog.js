export const UPDATE_LOG = "UPDATE_LOG";

export const updateLog = (log) => (
  {
    type: UPDATE_LOG,
    payload: {
      term: log.term,
      location: log.location,
      number: log.number,
      method: log.method,
      result: log.result,
    }
  }
);
