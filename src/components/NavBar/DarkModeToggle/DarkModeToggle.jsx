export default function DarkModeToggle ({darkMode, setDarkMode}) {
    return (
        <div className='darkModeToggle'>
            <input type="checkbox" id="toggle" onClick={()=> setDarkMode(!darkMode)}/>
            <label for="toggle">toggle</label>
        </div>
    )
}