import './index.css';

export default function Tree () {
  return (
    <div className="tree">
      <h2>Original</h2>
      <p>root</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>

      <hr/>

      <ol className="values">
        <li className="title">root
          <ol className="values">
            <li className="title">ant</li>
            <li className="title">bear
              <ol className="values">
                <li className="title">cat</li>
                <li className="title">dog
                  <li className="title">elephant</li>
                </li>
              </ol>
            </li>
            <li className="title">frog</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

// Notes

// FIG A.
// <li className="title"> TITLE
//   <ol className="values"> VALUES </ol> {/* Optional */}
// </li>

/*
   0  <p>root</p>
   4  <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
   4  <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
   8  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
   8  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
      <p>
  12    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
      </p>
   4  <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
 */