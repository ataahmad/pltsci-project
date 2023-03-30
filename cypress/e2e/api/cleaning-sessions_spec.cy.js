import { td } from "../../fixtures/e2e/api/testData";

describe('Testing the Cleaning Sessions API', () => {

  // Testing the example case given in the setup instructions
  it(td.controlCase.description, () => {
    const requestData = td.controlCase.requestData;
    const expectedResults = td.controlCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });


  // Testing a case in which invalid data types are passed
  it(td.invalidDataCase.description, () => {
    cy.handleInvalidRequest(td.invalidDataCase.requestData);
  });

  // Testing a case in which no instructions are given i.e. an empty string is passed in for instructions
  it(td.noInstructionCase.description, () => {
    const requestData = td.noInstructionCase.requestData;
    const expectedResults = td.noInstructionCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });


  // Testing a case in which there are no patches
  it(td.noPatchesCase.description, () => {
    const requestData = td.noPatchesCase.requestData;
    const expectedResults = td.noPatchesCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });

  // Testing cleaning in a straight vertical line with multiple patches of dirt
  it(td.verticalLineCase.description, () => {
    const requestData = td.verticalLineCase.requestData;
    const expectedResults = td.verticalLineCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });

  // Testing a case in which the hoover moves in all directions and returns to the origin.
  it(td.originNoPatchesCase.description, () => {
    const requestData = td.originNoPatchesCase.requestData;
    const expectedResults = td.originNoPatchesCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });

  // Testing a case in which the hoover cleans multiple patches in multiple directions, and returns to the origin.
  it(td.originPatchesCase.description, () => {
    const requestData = td.originPatchesCase.requestData;
    const expectedResults = td.originPatchesCase.expectedResults;
    cy.createCleaningSession(requestData, expectedResults);
  });

});