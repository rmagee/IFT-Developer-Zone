/*
 * IBM Confidential
 * OCO Source Materials
 * 5900-A1Y
 *
 * © Copyright IBM Corp. 2018
 *
 * The source code for this program is not published or
 * otherwise divested of its trade secrets, irrespective of
 * what has been deposited with the U.S. Copyright Office.
 */

// Test Libraries
import { expect } from 'chai';
import { getTraceRestraintParameters } from '../../../recall-assistant/ift-service';

describe('Testing getTraceRestraintParameters', function () {
  describe('ensure correct url creation', function () {
    it('should show correct URL for commission case', async function () {
      const urlRestraintParameters = getTraceRestraintParameters('urn:ibm:ift:location:loc:prefix.identifier',
        ['gtin1', 'gtin2'],
        '2019-11-01',
        '2019-11-15');
      const traceCallUri = 'https://food.ibm.com/ift/api/outbound/v2/events?event_type[]=commission' +
        urlRestraintParameters;
      return expect(traceCallUri).to.equal('https://food.ibm.com/ift/api/outbound/v2/events?event_type[]='
        + 'commission&location_id[]=urn%3Aibm%3Aift%3Alocation%3Aloc%3Aprefix.identifier&product_id[]=gtin1'
        + '&product_id[]=gtin2&event_start_timestamp=2019-11-01&event_end_timestamp=2019-11-15');
    });
  });
});
