/*
 * @Author: zhaoshuang 1403042939@qq.com
 * @Date: 2024-10-30 10:33:50
 * @LastEditors: zhaoshuang 1403042939@qq.com
 * @LastEditTime: 2024-10-30 10:35:14
 * @FilePath: \next-app\app\template.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./globals.css";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    {/* <h2>我是template</h2> */}
    {children}</div>;
}
