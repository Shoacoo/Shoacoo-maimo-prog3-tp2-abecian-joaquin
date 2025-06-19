import React from 'react'

export const Loading = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle
        fill="#FFE7D1"
        stroke="#FFE7D1"
        strokeWidth="10"
        r="15"
        cx="40"
        cy="100"
        style={{
          "--darkreader-inline-fill": "var(--darkreader-text-880088 #ff6dff)",
          "--darkreader-inline-stroke": "var(--darkreader-text-880088 #ff6dff)"
        }}
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        />
      </circle>

      <circle
        fill="#FFE7D1"
        stroke="#FFE7D1"
        strokeWidth="10"
        r="15"
        cx="100"
        cy="100"
        style={{
          "--darkreader-inline-fill": "var(--darkreader-text-880088 #ff6dff)",
          "--darkreader-inline-stroke": "var(--darkreader-text-880088 #ff6dff)"
        }}
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        />
      </circle>

      <circle
        fill="#FFE7D1"
        stroke="#FFE7D1"
        strokeWidth="10"
        r="15"
        cx="160"
        cy="100"
        style={{
          "--darkreader-inline-fill": "var(--darkreader-text-880088 #ff6dff)",
          "--darkreader-inline-stroke": "var(--darkreader-text-880088 #ff6dff)"
        }}
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        />
      </circle>
    </svg>
  )
}

export default Loading