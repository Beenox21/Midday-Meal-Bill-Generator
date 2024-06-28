

const YourComponent = () => {
  
  return (
    <div className="border-2 m-10">
      <div className="header  text-center mb-8 ">
        <p className="mb-2">GSTIN: 12BANPM4724K2ZJ <span className="float-right">Mob: 8787824091, 8415085516</span></p>
        <h1 className="text-2xl font-bold">TAX INVOICE</h1>
        <h2 className="text-xl font-semibold">M/s. MURARI ENTERPRISES</h2>
        <p className="text-sm">Deals in: All Kinds of Hardware goods & General Order Supplier<br/>
        VILL - MOHONG MURA, BORDUMSA<br/>
        DIST. CHANGLANG (ARUNACHAL PRADESH)</p>
      </div>
      <table className="w-full border-collapse mb-8" id="table-to-pdf">
        <tbody>
          <tr>
            <td className="border text-center p-2">SL NO. <strong className="text-red-500">609</strong></td>
            <td className="border text-center p-2">Date: 24/6/2024</td>
            <td className="border pl-36 p-2">State: Arunachal Pradesh<br/>State Code: 12</td>
          </tr>
          <tr>
            <td className="border p-2" colSpan="2">The Deputy Director of School Education Changlang (AP)<br/>MDM 2023-2024 (113 days)</td>
            <td className="border p-2">Vehicle No. AR-20-5247<br/>Place of Supply: <strong>GUPS LONGKHAM PONTHAI</strong></td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-200">QNTY.</th>
            <th className="border p-2 bg-gray-200">Description</th>
            <th className="border p-2 bg-gray-200">RATE</th>
            <th className="border p-2 bg-gray-200">Taxable Value 0%</th>
            <th className="border p-2 bg-gray-200">Taxable Value 5%</th>
            <th className="border p-2 bg-gray-200">Taxable Value 12%</th>
            <th className="border p-2 bg-gray-200">Taxable Value 18%</th>
            <th className="border p-2 bg-gray-200">Taxable Value 28%</th>
            <th className="border p-2 bg-gray-200">TOTAL AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">24 kg</td><td className="border p-2">Potato</td><td className="border p-2">25/-</td><td className="border p-2">600</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border border-black p-2">600</td></tr>
          <tr><td className="border p-2">8 kg</td><td className="border p-2">Onion</td><td className="border p-2">40/-</td><td className="border p-2">320</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border border-black p-2"></td><td className="border-black border  p-2">320</td></tr>
          <tr><td className="border p-2">4 kg</td><td className="border p-2">Salt</td><td className="border p-2">15/-</td><td className="border p-2">60</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">60</td></tr>
          <tr><td className="border p-2">7 kg</td><td className="border p-2">Masoor Dal</td><td className="border p-2">90/-</td><td className="border p-2">630</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">630</td></tr>
          <tr><td className="border p-2">3 ltr</td><td className="border p-2">Mustard Oil</td><td className="border p-2">130/-</td><td className="border p-2">390</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">390</td></tr>
          <tr><td className="border p-2">4 kg</td><td className="border p-2">Nutrela</td><td className="border p-2">100/-</td><td className="border p-2">400</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">400</td></tr>
          <tr><td className="border p-2">4 kg</td><td className="border p-2">Dry Peas</td><td className="border p-2">80/-</td><td className="border p-2">320</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">320</td></tr>
          <tr><td className="border p-2">1 kg</td><td className="border p-2">Dry Chilly</td><td className="border p-2">260/-</td><td className="border p-2">260</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">260</td></tr>
          <tr><td className="border p-2">212 pcs</td><td className="border p-2">Egg</td><td className="border p-2">8/-</td><td className="border p-2">1696</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2">1696</td></tr>
        </tbody>
      </table>
      <div className="mt-8">
        <p className="font-bold">Bank Details</p>
        <table className="w-full border-collapse">
          <tbody>
            <tr><td className="border p-2">Bank: State Bank of India</td><td className="border p-2">Add: CGST</td></tr>
            <tr><td className="border p-2">Br/anch: Bordumsa</td><td className="border p-2">Add: SGST</td></tr>
            <tr><td className="border p-2">A/c. No.: 38041710002</td><td className="border p-2">Add: IGST</td></tr>
            <tr><td className="border p-2">IFSC: SBIN0009407</td><td className="border p-2"></td></tr>
            <tr><td className="border p-2" colSpan="2">Total before Tax: 9232</td></tr>
            <tr><td className="border p-2" colSpan="2">Total after Tax: 9232</td></tr>
          </tbody>
        </table>
      </div>
      <div className="footer mt-8 text-center">
        <p>Rupees: <strong>Nine thousand two hundred thirty two only.</strong></p>
        <p className="mt-4 font-bold">M/s MURARI ENTERPRISES</p>
      </div>
      {/* <button onClick={exportTableToPDF} className="mt-4 p-2 bg-blue-500 text-white rounded">Export as PDF</button> */}
    </div>
  );
};

export default YourComponent;
