#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (CoreVideo_CVBase)
+(JSValue*) valueWithCVSMPTETime: (CVSMPTETime) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"subframes": @(s.subframes),
		@"subframeDivisor": @(s.subframeDivisor),
		@"counter": @(s.counter),
		@"type": @(s.type),
		@"flags": @(s.flags),
		@"hours": @(s.hours),
		@"minutes": @(s.minutes),
		@"seconds": @(s.seconds),
		@"frames": @(s.frames),
	} inContext: context];
}
-(CVSMPTETime) toCVSMPTETime {
	return (CVSMPTETime) {
		(SInt16) [self[@"subframes"] toInt32],
		(SInt16) [self[@"subframeDivisor"] toInt32],
		(UInt32) [self[@"counter"] toDouble],
		(UInt32) [self[@"type"] toDouble],
		(UInt32) [self[@"flags"] toDouble],
		(SInt16) [self[@"hours"] toInt32],
		(SInt16) [self[@"minutes"] toInt32],
		(SInt16) [self[@"seconds"] toInt32],
		(SInt16) [self[@"frames"] toInt32],
	};
}
+(JSValue*) valueWithCVTimeStamp: (CVTimeStamp) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"version": @(s.version),
		@"videoTimeScale": @(s.videoTimeScale),
		@"videoTime": @(s.videoTime),
		@"hostTime": @(s.hostTime),
		@"rateScalar": @(s.rateScalar),
		@"videoRefreshPeriod": @(s.videoRefreshPeriod),
		@"subframes": @(s.smpteTime.subframes),
		@"subframeDivisor": @(s.smpteTime.subframeDivisor),
		@"counter": @(s.smpteTime.counter),
		@"type": @(s.smpteTime.type),
		@"flags": @(s.smpteTime.flags),
		@"hours": @(s.smpteTime.hours),
		@"minutes": @(s.smpteTime.minutes),
		@"seconds": @(s.smpteTime.seconds),
		@"frames": @(s.smpteTime.frames),
		@"flags": @(s.flags),
		@"reserved": @(s.reserved),
	} inContext: context];
}
-(CVTimeStamp) toCVTimeStamp {
	return (CVTimeStamp) {
		(uint32_t) [self[@"version"] toUInt32],
		(int32_t) [self[@"videoTimeScale"] toInt32],
		(int64_t) [self[@"videoTime"] toDouble],
		(uint64_t) [self[@"hostTime"] toDouble],
		(double) [self[@"rateScalar"] toDouble],
		(int64_t) [self[@"videoRefreshPeriod"] toDouble],
		[self[@"smpteTime"] toCVSMPTETime],
		(uint64_t) [self[@"flags"] toDouble],
		(uint64_t) [self[@"reserved"] toDouble],
	};
}
+(JSValue*) valueWithCVTime: (CVTime) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"timeValue": @(s.timeValue),
		@"timeScale": @(s.timeScale),
		@"flags": @(s.flags),
	} inContext: context];
}
-(CVTime) toCVTime {
	return (CVTime) {
		(int64_t) [self[@"timeValue"] toDouble],
		(int32_t) [self[@"timeScale"] toInt32],
		(int32_t) [self[@"flags"] toInt32],
	};
}
@end
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCVSMPTETimeType24"] = @0U;
	context[@"kCVSMPTETimeType25"] = @1U;
	context[@"kCVSMPTETimeType30Drop"] = @2U;
	context[@"kCVSMPTETimeType30"] = @3U;
	context[@"kCVSMPTETimeType2997"] = @4U;
	context[@"kCVSMPTETimeType2997Drop"] = @5U;
	context[@"kCVSMPTETimeType60"] = @6U;
	context[@"kCVSMPTETimeType5994"] = @7U;

	context[@"kCVSMPTETimeValid"] = @1U;
	context[@"kCVSMPTETimeRunning"] = @2U;

	context[@"kCVTimeIsIndefinite"] = @1;

	context[@"kCVTimeStampVideoTimeValid"] = @1ULL;
	context[@"kCVTimeStampHostTimeValid"] = @2ULL;
	context[@"kCVTimeStampSMPTETimeValid"] = @4ULL;
	context[@"kCVTimeStampVideoRefreshPeriodValid"] = @8ULL;
	context[@"kCVTimeStampRateScalarValid"] = @16ULL;
	context[@"kCVTimeStampTopField"] = @65536ULL;
	context[@"kCVTimeStampBottomField"] = @131072ULL;
	context[@"kCVTimeStampVideoHostTimeValid"] = @3ULL;
	context[@"kCVTimeStampIsInterlaced"] = @196608ULL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVIndefiniteTime;
	if (p != NULL) context[@"kCVIndefiniteTime"] = [JSValue valueWithCVTime: kCVIndefiniteTime inContext: context];
	p = (void*) &kCVZeroTime;
	if (p != NULL) context[@"kCVZeroTime"] = [JSValue valueWithCVTime: kCVZeroTime inContext: context];
}
void load_CoreVideo_CVBase_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
