/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/

interface Data {
    entry1: string
    entry2: string
    entry3: string
    entry4: string
    entry5: string
    entry6: string
    entry7: string
    listItem1: string
    listItem2: string
    listItem3: string

}
export default function ContentProcess(data:any) {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold leading-6 text-red-800">Work with us</h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Our Process</h3>
              <p className="mt-8 text-lg text-gray-500">
                {data.entry1.blurb1}
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500">
                <p>
                {data.entry2.blurb2}
                </p>
                <p>
                {data.entry3.blurb3}
                </p>
                <p>
                {data.entry4.blurb4}
                </p>
                <ul role="list">
                  <li>{data.listItem1.item1}</li>
                  <li>{data.listItem2.item2}</li>
                  <li>{data.listItem3.item3}</li>
                </ul>
                <p>
                {data.entry5.blurb5}
                </p>
                <h3>How we’re different</h3>
                <p>
                {data.entry6.blurb6}
                </p>
                <p>
                {data.entry7.blurb7}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  