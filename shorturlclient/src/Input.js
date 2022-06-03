import React from 'react'

function Input() {
  return (
    <div>
        <h1 className='mt-5 text-center'><span className='short-dec'>#</span>URL <span className='short-dec'>Shortener</span></h1>
        <center>
            <div className='mt-4'>
                <input type="url"  className='form-control mt-3'placeholder='Enter URL' name='url' />
                <button className='btn btn-dark mt-3'>Shorten URL</button>
            </div>
            </center>
            <table className="table table-borderd table-bordered table-responsive mt-5 text-white">
                <thead>
                        <tr>
                        <th scope="col">#SL.</th>
                        <th scope="col">Original Link</th>
                        <th scope="col">Short Link</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    </table>
    </div>
  )
}

export default Input