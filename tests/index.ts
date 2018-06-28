import "mocha";
import * as assert from "assert";
import {SmokeTest} from "../dist";

describe('index', ()=> {
    it("should say 'Hello World'", ()=>{
        var actual = SmokeTest.HelloWorld();

        var expected = 'Hello World';
        //assert.equal(actual, waitedResult);
        assert.strictEqual(actual, expected);
    });
});