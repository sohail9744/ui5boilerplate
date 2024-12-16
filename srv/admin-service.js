const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
  const {
    Employees,
    Sites,
    Positions,
    BusinessUnits,
    Timesheet,
    WorkflowApprovalConfig,
    Requests,
    RequestHistories,
    EmailLogs,
  } = this.entities;
});
