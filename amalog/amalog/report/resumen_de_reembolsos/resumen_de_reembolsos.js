// Copyright (c) 2016, Lewin Villar and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Resumen de Reembolsos"] = {
	"filters": [
		{
			"label": __("Sales Invoice"),
			"fieldname": "sales_invoice",
			"fieldtype": "Link",
			"options": "Sales Invoice",
			"reqd": 1,
			"bold": 1
		}
	]
};
