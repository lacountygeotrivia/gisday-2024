/* Copyright 2022 Esri
*
* Licensed under the Apache License Version 2.0 (the "License");
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

export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="position-fixed w-100 h-100 d-flex flex-column justify-content-center" 
            style={{zIndex: 2000, backgroundColor: "rgba(0,0,0,0.6)"}}>
            <div className="card align-self-center" style={{width: "80%", maxWidth: "500px"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Instructions</span>
                    <button type="button" className="btn-close" aria-label="Close" onClick={()=>dismiss()}></button>
                </div>
                <div className="card-body">
                    <ul>
                        <li>Use the map's pan/zoom functions to frame your guess</li>
						<li>The circle color will indicate if you're hot or cold</li>
						<li>A popup alert displays when you find the right location</li>
						<li>"Hints" are free, but "Reveals" won't earn points</li>
                    </ul>
					<img height='185' className="demo-photo" alt="" src="./viewfinder.png"/>
                </div>
            </div>
        </div>    
    )
}