import React, { useState } from "react";
import { Form, useFormAction } from "react-router-dom";

export default function LenteEspecifico() {
  const { register, handleSubmit } = useFormAction();
  const [tablaSeleccionada, setTablaSeleccionada] = useState("tabla1");

  const handleTablaSeleccionada = (tabla) => {
    setTablaSeleccionada(tabla);
  };

  return (
    <div>
      <h1>Vision Unica</h1>
      <div>
        <label>¿Para qué usas tus lentes?</label>
        <select
          onChange={(e) => handleTablaSeleccionada(e.target.value)}
          value={tablaSeleccionada}
        >
          <option value="tabla1">Vision Unica</option>
          <option value="tabla2">Visión Cercana</option>
          <option value="tabla3">Progresivo</option>
          <option value="tabla4">Bifocal</option>
          <option value="tabla5">No prescripción</option>
        </select>
      </div>
      <form>
        {tablaSeleccionada === "tabla1" && (
          <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
            {
              <table class="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
                <thead class="bg-neutral-100 dark:bg-neutral-600">
                  <tr>
                    <th class="w-1/4 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      {" "}
                    </th>
                    <th class="w-1/4 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Sphere (SPH)
                    </th>
                    <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Cylinder (CYL)
                    </th>
                    <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Axis (AXI)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-900 dark:text-neutral-100">
                      Right (OD)
                    </td>

                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600 ">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>

                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Left (OS)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </table>
        )}
        {tablaSeleccionada === "tabla2" && (
          <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
            {
              <table class="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
                <thead class="bg-neutral-100 dark:bg-neutral-600">
                  <tr>
                    <th class="w-1/4 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      {" "}
                    </th>
                    <th class="w-1/4 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Sphere (SPH)
                    </th>
                    <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Cylinder (CYL)
                    </th>
                    <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Axis (AXI)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-900 dark:text-neutral-100">
                      Right (OD)
                    </td>

                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600 ">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>

                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Left (OS)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Near PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </table>
        )}
        {tablaSeleccionada === "tabla3" && (
          <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
            {
              <table class="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
                <thead class="bg-neutral-100 dark:bg-neutral-600">
                  <tr>
                    <th class="w-1/5 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      {" "}
                    </th>
                    <th class="w-1/5 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Sphere (SPH)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Cylinder (CYL)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Axis (AXI)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Add
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-900 dark:text-neutral-100">
                      Right (OD)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600 ">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.0">+1.00</option>
                        <option value="+1.25">+1.25</option>
                        <option value="+1.50">+1.50</option>
                        <option value="+1.75">+1.75</option>
                        <option value="+2.00">+2.00</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Left (OS)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.0">+1.00</option>
                        <option value="+1.25">+1.25</option>
                        <option value="+1.50">+1.50</option>
                        <option value="+1.75">+1.75</option>
                        <option value="+2.00">+2.00</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                      </select>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Near PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </table>
        )}
        {tablaSeleccionada === "tabla4" && (
          <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
            {
              <table class="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
                <thead class="bg-neutral-100 dark:bg-neutral-600">
                  <tr>
                    <th class="w-1/5 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      {" "}
                    </th>
                    <th class="w-1/5 min-w-[100px] border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Sphere (SPH)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Cylinder (CYL)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Axis (AXI)
                    </th>
                    <th class="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-neutral-100 text-left">
                      Add
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-900 dark:text-neutral-100">
                      Right (OD)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600 ">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.0">+1.00</option>
                        <option value="+1.25">+1.25</option>
                        <option value="+1.50">+1.50</option>
                        <option value="+1.75">+1.75</option>
                        <option value="+2.00">+2.00</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Left (OS)
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="-1.00">-1.00</option>
                        <option value="-0.75">-0.75</option>
                        <option value="-0.50">-0.50</option>
                        <option value="-0.25">-0.25</option>
                        <option value="0.00">0.00</option>
                        <option value="00 blueprint">00 Plano</option>
                        <option value="NONE">NONE</option>
                        <option value="SPH">SPH</option>
                        <option value="DS">DS</option>
                        <option value="Balance">Balance</option>
                        <option value="+0.25">+0.25</option>
                        <option value="+0.50">+0.50</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.00">+1.00</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="001">001</option>
                        <option value="002">002</option>
                        <option value="003">003</option>
                        <option value="004">004</option>
                        <option value="005">005</option>
                        <option value="006">006</option>
                        <option value="007">007</option>
                        <option value="008">008</option>
                        <option value="009">009</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="+0.75">+0.75</option>
                        <option value="+1.0">+1.00</option>
                        <option value="+1.25">+1.25</option>
                        <option value="+1.50">+1.50</option>
                        <option value="+1.75">+1.75</option>
                        <option value="+2.00">+2.00</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                        <option value="+">+</option>
                      </select>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 dark:bg-neutral-600 p-4 text-slate-500 dark:text-neutral-100">
                      Near PD
                    </td>
                    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-neutral-600">
                      <select>
                        <option value="NONE">NONE</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </table>
        )}
        {tablaSeleccionada === "tabla5" && (
          <table className="border-separate border-spacing-2 w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-[#fff4] text-sm shadow-sm">
            {/* ... Contenido de la tabla 5 ... */}
          </table>
        )}
      </form>
    </div>
  );
}
