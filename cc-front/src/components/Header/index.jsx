import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const Header = () => {
	return (
		<div className="Header">
			<h1>Collector Chain</h1>
			<form
			// onSubmit={handleSubmitForm}
			>
				<InputGroup
					inside
					// onChange={handleChange}
				>
					<AutoComplete />
					{/* <AutoComplete data={data} /> */}
					<InputGroup.Button tabIndex={-1}>
						<SearchIcon />
					</InputGroup.Button>
				</InputGroup>
			</form>
		</div>
	);
};

export default Header;
