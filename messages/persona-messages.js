const { EmbedBuilder } = require('discord.js');


/*
	

	Vanilla * Available Message Types:


	optInState() => 

	lastUpdated() =>

	approvedClientVersion() =>

	workflowType() =>

	submissionDate() =>

	deleteRequest() =>

	archived() =>
	
	purchasable() =>


*/

module.exports = {

	optInState(offer, data) {

		const offv1 = data.result.value.filter(c => c.optInState == "Opted In").length;
		const offv2 = data.result.value.filter(c => c.optInState == "Active").length;
		


		return new EmbedBuilder()
				.setColor("#FFF059")
				.addFields({
					name: 'A __Persona Offer__ has been selected!',
					value: `[**${offer.offerTitle}**](https://auger.minecraft.net/viewOffer/${offer.offerId})`
				})
				.setFooter({text: `Persona selected: ${offv1} / ${offv2}`})
			

	}


}
