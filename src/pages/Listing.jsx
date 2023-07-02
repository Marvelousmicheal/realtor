import React, { useState } from "react";

function Listing() {
  const [formDate, setformData] = useState({
    type: "rent",
    username: "",
    bedrooms: 1,
    bathrooms: 1,
    Parking: false,
    furnished: false,
    address: "",
    describe: "",
    offer: true,
    regularPrice: 100000,
    discountedPrice: 20000,
  });
  const {
    type,
    username,
    bedrooms,
    bathrooms,
    Parking,
    furnished,
    address,
    describe,
    offer,
    regularPrice,
    discountedPrice,
  } = formDate;
  function onChange() {}

  return (
    <>
      <main className="max-w-md px-2 mx-auto">
        <h1 className="mt-6 text-3xl text-center font-bold capitalize">
          Create Your Listing
        </h1>
        <form>
          <p className="text-lg mt-6 font-semibold">Rent or Attachment </p>
          <div className="flex">
            <button
              type="button"
              id="type"
              value="sale"
              onClick={onChange}
              className={` mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                type === "rent" ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              Attachment
            </button>
            <button
              type="button"
              id="type"
              value="sale"
              onClick={onChange}
              className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                type === "sale" ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              Rent
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Name of Lodge</p>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter Name of Lodge"
            onChange={onChange}
            maxLength="40"
            minLength="10"
            required
            className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-red-600 mb-6"
          />
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-semibold">Number of bedrooms</p>
              <input
                type="number"
                id="bedroom"
                value={bedrooms}
                min="1"
                max="20"
                required
                className="px-4 py-2 text-xl w-full text-gray-700 bg-white border-red-400 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Number of bathrooms</p>
              <input
                type="number"
                id="bathrooms"
                value={bathrooms}
                min="1"
                max="20"
                required
                className="px-4 py-2 text-xl w-full text-gray-700 bg-white border-red-400 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center rounded"
              />
            </div>
          </div>
          <p className="text-lg mt-6 font-semibold">Parking Spot </p>
          <div className="flex">
            <button
              type="button"
              id="Packing"
              value={true}
              onClick={onChange}
              className={` mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                !Parking ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              YES
            </button>
            <button
              type="button"
              id="Packing"
              value={false}
              onClick={onChange}
              className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                Parking ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              NO
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Furnished</p>
          <div className="flex">
            <button
              type="button"
              id="furnished"
              value={true}
              onClick={onChange}
              className={` mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                !furnished ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              YES
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              onClick={onChange}
              className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                furnished ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              NO
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Address</p>
          <textarea
            type="text"
            id="address"
            value={address}
            placeholder="Enter Address of Lodge"
            onChange={onChange}
            minLength="10"
            required
            className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-red-600 mb-6"
          />
          <p className="text-lg  font-semibold">Description</p>
          <textarea
            type="text"
            id="describe"
            value={describe}
            placeholder="Enter Description of Lodge"
            onChange={onChange}
            minLength="10"
            required
            className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-red-600 mb-6"
          />
          <p className="text-lg  font-semibold">Offers</p>
          <div className="flex mb-6">
            <button
              type="button"
              id="offer"
              value={true}
              onClick={onChange}
              className={` mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                !offer ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              YES
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              onClick={onChange}
              className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
                offer ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              Rent
            </button>
          </div>
          <div>
            <div className="mb-6">
              <p className="text-lg font-semibold"> Regular Price</p>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  id="regular-price"
                  value={regularPrice}
                  onChange={onChange}
                  min="50000"
                  max="4000000"
                  required
                  className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-red-600  text-center"
                />
                {type === "rent" && <div className="text-md"> Naira/month</div>}
              </div>
            </div>
            {offer && (
              <div>
                <p className="text-lg font-semibold"> Discounted Price</p>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    id="discounted-price"
                    value={discountedPrice}
                    onChange={onChange}
                    min="50000"
                    max="4000000"
                    required={offer}
                    className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-red-600  text-center"
                  />
                  {type === "rent" && (
                    <div className="text-md"> Naira/month</div>
                  )}
                </div>
              </div>
            )}

            <div className="mb-6 mt-6">
              <p className="text-large font-semibold">images</p>
              <p className="text-gray-600 mt-4 mb-4">the first image will be cover(max 6)</p>
              <input type="file" id="images" onChange={onchange} accept=".jpg,.png,.peg" multiple required  className="w-full px-3 py1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out  focus:bg-white focus:border-slate-600"/>
            </div>

            <button type="submit" className="w-full mb-5 px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              CREAT LISTING
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Listing;
