import React from 'react'

function Results() {
    const [showResults, setShowResults] = React.useState(false)
    const onClick2 = () => setShowResults(false)
  return (
    <div>
       <div id="results" onClick={onClick2} className="search-results">
    Some Results
  </div>
    </div>
  )
}

export default Results
