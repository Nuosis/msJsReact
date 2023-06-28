import React,{useState} from "react"
export default function EmailInput({title,unchosenEmails,setUnchosenEmails}) {
  const [value, setValue]=useState('');
  const [chosenEmails, setChosenEmails]=useState([]);
  const [suggestions, setSuggestions]=useState([]);
  const [error, setError]=useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(null);
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      const foundEmails = unchosenEmails.sort().filter(v => regex.test(v));
      setSuggestions(foundEmails);
      setValue(value);
    };
    if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
      if (value && isValid(value)) {
        setChosenEmails([...emails, value]);
        //setValue("");
        e.preventDefault();
      } else if (value && !isValid(value)) {
        setError("Please enter a unique & valid email address");
        e.preventDefault();
      }
    }
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(email => <li key={email} 
        onClick = {() => {
          setChosenEmails([...chosenEmails, email]);
          setUnchosenEmails(unchosenEmails.filter((item)=>{return item !== email}))
          setSuggestions([])
          setValue(chosenEmails);
        }
        }
        >{email}</li>)}
      </ul>
    )
  };
  return (
      <div className="flex items-center gap-2">
        <label
          htmlFor="email"
          className=" mt-1
                      mb-1
                      w-9
                      text-right 
                      block text-sm 
                      font-medium 
                      leading-6 
                      text-gray-900 "
        >
          {`${title}: `}
        </label>
        <div className="mt-1
                        mb-1
                        w-full
                        ">
          <input
            type="email"
            name="email"
            id={`${title}: `}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className=" block w-full 
                        rounded-md 
                        border-0 
                        px-1.5
                        py-1.5 
                        text-zinc-900 
                        shadow-sm 
                        ring-1 
                        ring-inset 
                        ring-gray-300 
                        placeholder:text-zinc-500 
                        focus:ring-0 
                        focus:ring-inset 
                        focus:ring-gray-400 
                        sm:text-sm 
                        sm:leading-6
                        bg-inherit 
                        "
            placeholder="+ email"
          />
          {renderSuggestions()}
        </div>
      </div>
    );
  }