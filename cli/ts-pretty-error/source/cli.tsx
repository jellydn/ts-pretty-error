#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ ts-pretty-error

	Examples
	  $ ts-pretty-error
`,
	{
		importMeta: import.meta,
		flags: {},
	},
);

render(<App />);
