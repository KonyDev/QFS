#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UISpringTimingParameters (Exports)
-(id) jsinitWithDampingRatio: (CGFloat) ratio initialVelocity: (CGVector) velocity 
{
	id resultVal__;
	resultVal__ = [[self initWithDampingRatio: ratio initialVelocity: velocity ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(id) jsinitWithDampingRatio: (CGFloat) ratio 
{
	id resultVal__;
	resultVal__ = [[self initWithDampingRatio: ratio ] autorelease];
	return resultVal__;
}
-(id) jsinitWithMass: (CGFloat) mass stiffness: (CGFloat) stiffness damping: (CGFloat) damping initialVelocity: (CGVector) velocity 
{
	id resultVal__;
	resultVal__ = [[self initWithMass: mass stiffness: stiffness damping: damping initialVelocity: velocity ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation UICubicTimingParameters (Exports)
-(id) jsinitWithAnimationCurve: (UIViewAnimationCurve) curve 
{
	id resultVal__;
	resultVal__ = [[self initWithAnimationCurve: curve ] autorelease];
	return resultVal__;
}
-(id) jsinitWithControlPoint1: (CGPoint) point1 controlPoint2: (CGPoint) point2 
{
	id resultVal__;
	resultVal__ = [[self initWithControlPoint1: point1 controlPoint2: point2 ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UISpringTimingParameters class], @protocol(UISpringTimingParametersInstanceExports));
	class_addProtocol([UISpringTimingParameters class], @protocol(UISpringTimingParametersClassExports));
	class_addProtocol([UICubicTimingParameters class], @protocol(UICubicTimingParametersInstanceExports));
	class_addProtocol([UICubicTimingParameters class], @protocol(UICubicTimingParametersClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UITimingParameters_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
