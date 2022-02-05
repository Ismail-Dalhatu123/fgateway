export default function PaymentRow({ is_verified }) {
  return (
    <tr className="hover:bg-indigo-100 cursor-pointer border-b border-gray-200 py-10">
      <td className="px-4 py-4">11o3917</td>
      <td className="px-4 py-4">9:77</td>
      <td className="px-4 py-4">Abuja</td>
      <td className="px-4 py-4">Gombe</td>
      <td className="px-4 py-4">3000</td>
      <td className="px-4 py-4">197391</td>
      <td className="px-4 py-4">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          fill={is_verified ? "#4BB543" : "red"}
          style={{ width: 20, height: 20 }}
        >
          <g>
            <path
              d="M20,0C8.974,0,0,8.973,0,20c0,11.027,8.974,20,20,20c11.029,0,20-8.973,20-20C40,8.973,31.029,0,20,0z M28.818,17.875
		l-8.562,8.564c-0.596,0.595-1.377,0.893-2.158,0.893c-0.779,0-1.561-0.298-2.156-0.893l-4.758-4.758
		c-1.191-1.191-1.191-3.124,0-4.313c1.191-1.192,3.121-1.192,4.314,0l2.6,2.6l6.408-6.407c1.188-1.189,3.123-1.189,4.312,0
		C30.01,14.752,30.01,16.684,28.818,17.875z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </td>
    </tr>
  );
}
