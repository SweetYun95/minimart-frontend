import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { checkTokenStatusThunk, getTokenThunk, readTokenThunk, refreshTokenThunk } from '../features/tokenSlice'

function TokenPage() {
   const dispatch = useDispatch()
   const [isFocused, setIsFocused] = useState(false)
   const [isHovered, setIsHovered] = useState(false)

   const { token, tokenStatus, loading, error } = useSelector((state) => state.token)

   // 보유한 토큰 조회
   useEffect(() => {
      dispatch(readTokenThunk())
   }, [dispatch])

   //    if (token) console.log('💾[TokenPage] token:', token)
   //    if (tokenStatus) console.log('💾[TokenPage] tokenStatus: ', tokenStatus)

   // 토큰 유효성 검증
   useEffect(() => {
      if (token) dispatch(checkTokenStatusThunk())
   }, [dispatch, token])

   // 토큰 발급 onClick
   const handleGetToken = () => {
      dispatch(getTokenThunk())
   }

   // 토큰 유효성 검증 실패시 재발급 onClick
   const handleRefreshToken = () => {
      dispatch(refreshTokenThunk())
   }

   if (loading) return <p>로딩 중...</p>


   return (
      <>
         <div style={{backgroundColor: '#F2FAFF', paddingTop: '74px'}}>
            <section className='token-section' style={{ height: '500px', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
            <h1 className='section-title'>
               API Key 발급받기
            </h1>
            {error && <p color="error">에러 발생:{error}</p>}
            <textarea className='token-input' value={token || ''} style={{width: '100%', minHeight:'50px', padding: '12px', fontSize: '16px', lineHeight: '1.5', border: '1px solid #d8d8d8',
                  borderRadius: '6px',
                  cursor: 'not-allowed',
                  outline: 'none',
                  boxSizing: 'border-box',
                  boxShadow: '0 0 4px rgba(0, 123, 255, 0.3)'}} 
                  onBlur={() => setIsFocused(false)}></textarea>
            {token && '발급받은 토큰이 존재합니다.'}
            {!token && (
               <button className='token-btn' style={{marginTop: '20px', fontSize: '16px', padding:'15px 20px', width:'200px', border: '1px solid #000', backgroundColor: isHovered ? '#463832' : '#FFFDE9',
                color: isHovered ? '#fff' : '#000', borderRadius: '30px', cursor:'pointer', transition: 'all 0.3s ease' }} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} onClick={handleGetToken}>
                  발급받기
               </button>
            )}
            {tokenStatus === 'expired' && (
               <>
                  <p>토큰이 만료되었습니다.</p>
                   <button className='token-btn' style={{marginTop: '20px', fontSize: '16px', padding:'15px 20px', width:'200px', border: '1px solid #000', backgroundColor: isHovered ? '#463832' : '#FFFDE9',
                color: isHovered ? '#fff' : '#000', borderRadius: '30px', cursor:'pointer', transition: 'all 0.3s ease' }} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} onClick={handleRefreshToken}>
                     재발급받기
                  </button>
               </>
            )}
            {tokenStatus === 'invalid' && <p color="error">토큰이 유효하지 않습니다. 관리자에게 문의하세요. </p>}
            </section>
         </div>
      </>
   )
}

export default TokenPage
