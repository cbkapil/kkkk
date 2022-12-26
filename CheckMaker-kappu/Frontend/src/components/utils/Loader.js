import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

export default function Loader(props) {
  return (
    <div className="loader">
          <SyncLoader
            color={"#05775c"}
            loading={props.loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
  )
}
