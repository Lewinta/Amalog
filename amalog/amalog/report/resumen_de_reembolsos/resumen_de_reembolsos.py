# Copyright (c) 2013, Lewin Villar and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_columns():
	return [
		_("Invoice") 		+ ":Link/Sales Invoice:100",
		_("Reembolso") 		+ ":Link/Payment Request:140",
		_("Date") 			+ ":Date:120",
		_("Reference") 		+ ":Data:120",
		_("Description") 	+ ":Data:230",
		_("Currency") 		+ ":Data:100",
		_("Amount") 		+ ":Currency/currency:120",
		_("Status") 		+ ":Data:100",
	]

def get_conditions(filters):
	
	conditions = ["docstatus = 1"]

	if filters.get("sales_invoice"):
		conditions.append("reference_name = '{}'".format(filters.get("sales_invoice")))

	return " AND ".join(conditions)

def get_data(filters):
	conditions = get_conditions(filters)

	return frappe.db.sql("""
		SELECT
			reference_name,
			name,
			transaction_date,
			external_reference,
			description,
			currency,
			grand_total,
			status
		FROM
			`tabPayment Request`
		WHERE 
			{conditions}
	""".format(conditions=conditions), debug=True)
