var m=Object.defineProperty;var c=(p,e,a)=>e in p?m(p,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[e]=a;var y=(p,e,a)=>(c(p,typeof e!="symbol"?e+"":e,a),a);import{i as T,W as b,C as f,p as v}from"./vendor.200284ec.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}};M();var w=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"externalAddress",type:"address"},{indexed:!0,internalType:"address",name:"toAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ExternalTokenTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_farmingToken",type:"address"}],name:"FarmingTokenUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"gameNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endTime",type:"uint256"}],name:"GameCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gameNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endTime",type:"uint256"}],name:"GameEndTimeChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"points",type:"uint256"}],name:"PointsClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_newCost",type:"uint256"}],name:"PointsCostChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"nftLevel",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pointsForTicket",type:"uint256"},{indexed:!1,internalType:"uint256",name:"totalWinners",type:"uint256"}],name:"PoolAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_points",type:"uint256"}],name:"PoolPointsForTicketUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_winnersCount",type:"uint256"}],name:"PoolTotalWinnerUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_stakingToken",type:"address"}],name:"StakingTokenUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"ticketCount",type:"uint256"},{indexed:!1,internalType:"uint256[]",name:"ticketIds",type:"uint256[]"},{indexed:!0,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"gameId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pointsSpent",type:"uint256"}],name:"TicketsBought",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_whoBought",type:"address"},{indexed:!1,internalType:"uint256",name:"_howMuchPoints",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_howMuchCost",type:"uint256"}],name:"UserBoughtPoints",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"poolId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gameNumber",type:"uint256"},{indexed:!1,internalType:"address[]",name:"winners",type:"address[]"}],name:"WinnersAnnounced",type:"event"},{inputs:[],name:"BUSDAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WBNBAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"collaborator",type:"address"}],name:"addCollaborator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_nftLevel",type:"uint256"},{internalType:"uint256",name:"_pointsForTicket",type:"uint256"},{internalType:"uint256",name:"_totalWinners",type:"uint256"},{internalType:"uint256",name:"_maxTicketsPerUser",type:"uint256"}],name:"addPool",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_gameNumber",type:"uint256"}],name:"announceWinners",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"blockAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_accounts",type:"address[]"}],name:"blockBatchAddresses",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"blockedAddresses",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"burnedNonces",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_ticketCount",type:"uint256"}],name:"buyTickets",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"claimIncentive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimStakingAndFarmingPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"}],name:"createGame",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_recipients",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"distributeBatchIncentive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"recipients",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"distributeBatchPoints",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"distributeIncentive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"distributePoints",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"einsteinAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"farmPointRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"farmingLpPools",outputs:[{internalType:"contract IBEP20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"farmingToken",outputs:[{internalType:"contract IFARMING",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"gameInfo",outputs:[{internalType:"uint256",name:"gameNumber",type:"uint256"},{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"bool",name:"isGameOver",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"gameTicketCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAvailableFarmingPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAvailableStakingPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"}],name:"getClaimedIncentive",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"}],name:"getCurrentIncentive",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"}],name:"getIncenitveTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"uint256",name:"gameId",type:"uint256"}],name:"getParticipantsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"points",type:"uint256"}],name:"getPointsFromBUSD",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"uint256",name:"gameId",type:"uint256"}],name:"getTicketsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getTotalAvailablePoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"incentiveReceiver",outputs:[{internalType:"uint256",name:"currentIncentive",type:"uint256"},{internalType:"uint256",name:"claimedIncentive",type:"uint256"},{internalType:"uint256",name:"latestTimestamp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract ISTAKING",name:"_stakingToken",type:"address"},{internalType:"contract IFARMING",name:"_farmingToken",type:"address"},{internalType:"uint256",name:"_pointInterval",type:"uint256"},{internalType:"uint256",name:"_maxIntervalsAllowed",type:"uint256"},{internalType:"uint256",name:"_stakePointRate",type:"uint256"},{internalType:"uint256",name:"_farmPointRate",type:"uint256"},{internalType:"uint256",name:"_perPointCostInUSD",type:"uint256"},{internalType:"address",name:"_BUSDAddress",type:"address"},{internalType:"address",name:"_WBNBAddress",type:"address"},{internalType:"address",name:"_einsteinAddress",type:"address"},{internalType:"address",name:"_pancakeSwapRouter",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"isAlreadyWinner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isCollaborator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"isGameParticipant",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lotteryStartTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxIntervalsAllowed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pancakeSwapRouter",outputs:[{internalType:"contract IPancakeRouter01",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"perGameTickets",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"perGameTotalParticipants",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"perPointCostInUSD",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pointInterval",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"poolCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"poolGameCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"poolInfo",outputs:[{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"uint256",name:"nftLevel",type:"uint256"},{internalType:"uint256",name:"pointsForTicket",type:"uint256"},{internalType:"uint256",name:"totalWinners",type:"uint256"},{internalType:"uint256",name:"maxTicketsPerUser",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"collaborator",type:"address"}],name:"removeCollaborator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"poolId",type:"uint256"}],name:"removePool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_rateInWei",type:"uint256"}],name:"setCostOfPoints",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"setCurrentIncentive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setFarmPointRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IBEP20[]",name:"_farmingLpPools",type:"address[]"}],name:"setFarmingLpPools",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IFARMING",name:"_farmingToken",type:"address"}],name:"setFarmingToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_gameNumber",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"}],name:"setGameEndTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_intervals",type:"uint256"}],name:"setMaxIntervalsAllowed",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_intervalInSeconds",type:"uint256"}],name:"setPointInterval",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_points",type:"uint256"}],name:"setPoolPointsForTicket",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_poolId",type:"uint256"},{internalType:"uint256",name:"_totalWinners",type:"uint256"}],name:"setPoolTotalWinner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_router",type:"address"}],name:"setRouterAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setStakePointRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract ISTAKING",name:"_stakingToken",type:"address"}],name:"setStakingToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakePointRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"stakingToken",outputs:[{internalType:"contract ISTAKING",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"ticketInfo",outputs:[{internalType:"uint256",name:"ticketNumber",type:"uint256"},{internalType:"uint256",name:"poolId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"gameNumber",type:"uint256"},{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"unblockAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_accounts",type:"address[]"}],name:"unblockBatchAddresses",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"userTicketCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenContract",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}];class g{constructor(){y(this,"lotteryContract");y(this,"connect",async()=>{try{await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",rpcUrls:["https://speedy-nodes-nyc.moralis.io/2b7b1e5dba5e70eb1ae25f84/bsc/mainnet"],chainName:"Binance Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},blockExplorerUrls:["https://bscscan.com"]}]});const e=new b(window.ethereum);await e.send("eth_requestAccounts",[]);const a=e.getSigner(),u="0x1789DaA4fb4E8e7807896dc3c02CdCceca64B23a";this.lotteryContract=new f(u,w,a)}catch(e){return console.log(e),alert("Connection with metamask failed")}});y(this,"sendPoints",async(e,a)=>{if(!this.lotteryContract){await this.connect();return}const u=a.map(t=>v(""+t));await this.lotteryContract.distributeBatchPoints(e,u)});this.connect()}}window.onload=()=>{var e;const p=new g;(e=document.getElementById("pointsForm"))==null||e.addEventListener("submit",async a=>{var r,o,l;a.stopPropagation(),a.preventDefault();const u=(r=document.getElementById("address"))==null?void 0:r.value,t=(o=document.getElementById("points"))==null?void 0:o.value;if(!u||!t)return alert("Please enter addresses and points");const n=u.split(",").map(s=>s.trim());let i=t.split(",").map(s=>Number.parseFloat(s));if(n.length===0||i.length===0)return alert("Please enter addresses and points");if(n.length!==i.length&&i.length!=1)return alert("The length of addresses and points should be same.");for(const s of n)if(!T(s))return alert(`Entered address is not valid: ${s}`);for(const s of i)if(Number.isNaN(s))return alert("Points is not valid");if(i.length===1&&n.length!==1){const s=i[0];i=[];for(let d=0;d<n.length;d++)i.push(s)}document.getElementById("sendbtn").disabled=!0;try{await p.sendPoints(n,i),alert("POINTS SENT"),document.getElementById("pointsForm").reset()}catch(s){alert(((l=s.data)==null?void 0:l.message)||s.message)}finally{document.getElementById("sendbtn").disabled=!1}})};
