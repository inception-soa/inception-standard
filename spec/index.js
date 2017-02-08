'use strict'
/**
 * @file Unit tests for the inception-standard linter
 *
 * @author Anand Suresh <anandsuresh@gmail.com>
 * @copyright Copyright (C) 2017 Anand Suresh
 * @license Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const node = {
  path: require('path')
}
const chai = require('chai')
const expect = chai.expect
const inceptionStandard = require('../')

describe('inception-standard', function () {
  it('should lint files as specified', function () {
    inceptionStandard.lintFiles([], { cwd: 'bin' }, function (err, result) {
      expect(err).to.be.an.instanceof(Error)

      expect(result).to.be.an('object')
      expect(result.errorCount).to.equal(2)
      expect(node.path.resolve(result.results[0].filePath)).to.equal('./bin/cmd.js')

      expect(result.results[0].messages[0].message).to.equal('Missing semicolon.')
      expect(result.results[0].messages[1].message).to.equal('Missing semicolon.')
    })
  })
})
