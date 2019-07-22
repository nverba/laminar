import { testCall } from "../../../helpers/test-call.js";

export function errorFlow() { 
  return [
    { id: "id1" },
    { id: "id2", call: testCall, args: 'step-2' },
    { id: "id3", call: testCall, args: 'step-3' }
  ];
}