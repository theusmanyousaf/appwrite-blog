function Container({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container