"use strict";(globalThis.webpackChunk_snx_v3_oracle_manager=globalThis.webpackChunk_snx_v3_oracle_manager||[]).push([[733],{733:r=>{r.exports=JSON.parse('["error ImplementationIsSterile(address implementation)","error NoChange()","error NotAContract(address contr)","error NotNominated(address addr)","error Unauthorized(address addr)","error UpgradeSimulationFailed()","error ZeroAddress()","error ValueAlreadyInSet()","error ValueNotInSet()","error FeatureUnavailable(bytes32 which)","error InvalidAccountId(uint128 accountId)","error InvalidPermission(bytes32 permission)","error OnlyAccountTokenProxy(address origin)","error PermissionDenied(uint128 accountId, bytes32 permission, address target)","error PermissionNotGranted(uint128 accountId, bytes32 permission, address user)","error PositionOutOfBounds()","error AccountNotFound(uint128 accountId)","error EmptyDistribution()","error InsufficientCollateralRatio(uint256 collateralValue, uint256 debt, uint256 ratio, uint256 minRatio)","error MarketNotFound(uint128 marketId)","error NotFundedByPool(uint256 marketId, uint256 poolId)","error OverflowInt256ToInt128()","error OverflowInt256ToUint256()","error OverflowUint128ToInt128()","error OverflowUint256ToInt256()","error OverflowUint256ToUint128()","error MismatchAssociatedSystemKind(bytes32 expected, bytes32 actual)","error MissingAssociatedSystem(bytes32 id)","error InvalidMessage()","error NotCcipRouter(address)","error UnsupportedNetwork(uint64)","error AccountActivityTimeoutPending(uint128 accountId, uint256 currentTime, uint256 requiredTime)","error CollateralDepositDisabled(address collateralType)","error CollateralNotFound()","error FailedTransfer(address from, address to, uint256 value)","error InsufficentAvailableCollateral(uint256 amountAvailableForDelegationD18, uint256 amountD18)","error InsufficientAccountCollateral(uint256 amount)","error InsufficientAllowance(uint256 required, uint256 existing)","error InvalidParameter(string parameter, string reason)","error OverflowUint256ToUint64()","error PrecisionLost(uint256 tokenAmount, uint8 decimals)","error InsufficientCcipFee(uint256 requiredAmount, uint256 availableAmount)","error InsufficientDebt(int256 currentDebt)","error PoolNotFound(uint128 poolId)","error CannotScaleEmptyMapping()","error IneligibleForLiquidation(uint256 collateralValue, int256 debt, uint256 currentCRatio, uint256 cratio)","error InsufficientMappedAmount()","error MustBeVaultLiquidated()","error OverflowInt128ToUint128()","error InsufficientMarketCollateralDepositable(uint128 marketId, address collateralType, uint256 tokenAmountToDeposit)","error InsufficientMarketCollateralWithdrawable(uint128 marketId, address collateralType, uint256 tokenAmountToWithdraw)","error IncorrectMarketInterface(address market)","error NotEnoughLiquidity(uint128 marketId, uint256 amount)","error CapacityLocked(uint256 marketId)","error MinDelegationTimeoutPending(uint128 poolId, uint32 timeRemaining)","error PoolAlreadyExists(uint128 poolId)","error OverflowUint256ToUint32()","error OverflowUint32ToInt32()","error OverflowUint64ToInt64()","error RewardDistributorNotFound()","error RewardUnavailable(address distributor)","error InsufficientDelegation(uint256 minDelegation)","error InvalidCollateralAmount()","error InvalidLeverage(uint256 leverage)","error PoolCollateralLimitExceeded(uint128 poolId, address collateralType, uint256 currentCollateral, uint256 maxCollateral)","error AlreadyInitialized()","error CannotSelfApprove(address addr)","error IndexOverrun(uint256 requestedIndex, uint256 length)","error InvalidOwner(address addr)","error InvalidTransferRecipient(address addr)","error TokenAlreadyMinted(uint256 id)","error TokenDoesNotExist(uint256 id)","error InsufficientBalance(uint256 required, uint256 existing)","error DeviationToleranceExceeded(int256 deviation)","error InvalidInputPrice()","error InvalidNodeDefinition(tuple(uint8 nodeType, bytes parameters, bytes32[] parents) nodeType)","error InvalidPrice(int256 price)","error NodeNotRegistered(bytes32 nodeId)","error OracleDataRequired(address oracleContract, bytes oracleQuery)","error OverflowInt56ToInt24()","error OverflowUint256ToUint160()","error OverflowUint56ToInt56()","error StalenessToleranceExceeded()","error UnprocessableNode(bytes32 nodeId)","error UnsupportedOperation(uint8 operation)","error AddressInsufficientBalance(address account)","error ERC2771ForwarderExpiredRequest(uint48 deadline)","error ERC2771ForwarderInvalidSigner(address signer, address from)","error ERC2771ForwarderMismatchedValue(uint256 requestedValue, uint256 msgValue)","error ERC2771UntrustfulTarget(address target, address forwarder)","error FailedInnerCall()","error InvalidAccountNonce(address account, uint256 currentNonce)","error InvalidShortString()","error StringTooLong(string str)","error InvalidMarketOwner()","error InvalidSynthImplementation(uint256 synthImplementation)","error OnlyMarketOwner(address marketOwner, address sender)","error ExceedsMaxSynthAmount(uint256 maxSynthAmount, uint256 synthAmountCharged)","error ExceedsMaxUsdAmount(uint256 maxUsdAmount, uint256 usdAmountCharged)","error InsufficientAmountReceived(uint256 expected, uint256 current)","error InvalidMarket(uint128 marketId)","error InvalidPrices()","error IneligibleForCancellation(uint256 timestamp, uint256 expirationTime)","error InsufficientSharesAmount(uint256 expected, uint256 actual)","error InvalidAsyncTransactionType(uint8 transactionType)","error InvalidClaim(uint256 asyncOrderId)","error InvalidCommitmentAmount(uint256 minimumAmount, uint256 amount)","error InvalidSettlementStrategy(uint256 settlementStrategyId)","error OrderAlreadySettled(uint256 asyncOrderId, uint256 settledAt)","error InvalidSettlementStrategy(uint8 strategyType)","error InvalidVerificationResponse()","error MinimumSettlementAmountNotMet(uint256 minimum, uint256 actual)","error OutsideSettlementWindow(uint256 timestamp, uint256 startTime, uint256 expirationTime)","error SettlementStrategyNotFound(uint8 strategyType)","error InvalidSettlementWindowDuration(uint256 duration)","error InvalidCollateralType(address configuredCollateralType)","error WrapperExceedsMaxAmount(uint256 maxWrappableAmount, uint256 currentSupply, uint256 amountToWrap)","error InvalidCollateralLeverage(uint256)","error InvalidFeeCollectorInterface(address invalidFeeCollector)","error InvalidWrapperFees()","error PerpsMarketAlreadyInitialized()","error PerpsMarketNotInitialized()","error AccountLiquidatable(uint128 accountId)","error InsufficientCollateral(uint128 synthMarketId, uint256 collateralAmount, uint256 withdrawAmount)","error InsufficientCollateralAvailableForWithdraw(uint256 availableUsdDenominated, uint256 requiredUsdDenominated)","error InsufficientSynthCollateral(uint128 synthMarketId, uint256 collateralAmount, uint256 withdrawAmount)","error InvalidAmountDelta(int256 amountDelta)","error KeeperCostsNotSet()","error MaxCollateralExceeded(uint128 synthMarketId, uint256 maxAmount, uint256 collateralAmount, uint256 depositAmount)","error MaxCollateralsPerAccountReached(uint128 maxCollateralsPerAccount)","error PendingOrderExists()","error PriceFeedNotSet(uint128 marketId)","error SynthNotEnabledForCollateral(uint128 synthMarketId)","error InsufficientMargin(int256 availableMargin, uint256 minMargin)","error MaxOpenInterestReached(uint128 marketId, uint256 maxMarketSize, int256 newSideSize)","error MaxPositionsPerAccountReached(uint128 maxPositionsPerAccount)","error MaxUSDOpenInterestReached(uint128 marketId, uint256 maxMarketValue, int256 newSideSize, uint256 price)","error ZeroSizeOrder()","error AcceptablePriceExceeded(uint256 fillPrice, uint256 acceptablePrice)","error InsufficientAccountMargin(uint256 leftover)","error OrderNotValid()","error SettlementWindowExpired(uint256 timestamp, uint256 settlementTime, uint256 settlementExpiration)","error SettlementWindowNotOpen(uint256 timestamp, uint256 settlementTime)","error AcceptablePriceNotExceeded(uint256 fillPrice, uint256 acceptablePrice)","error NotEligibleForLiquidation(uint128 accountId)","error InvalidInterestRateParameters(uint128 lowUtilizationInterestRateGradient, uint128 highUtilizationInterestRateGradient)","error InvalidReferrerShareRatio(uint256 shareRatioD18)","error FeeRequired(uint256 amount)","error NotSupported(uint8 updateType)","error FailedTransfer(address from, address to, uint256 value)","error InvalidParameter(string parameter, string reason)","error NotEnoughBalance(uint256 amountRequested, uint256 currentBalance)","error NotEnoughRewardsLeft(uint256 amountRequested, uint256 amountLeft)","error Unauthorized(address addr)"]')}}]);