#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIInterpolatingMotionEffect (Exports)
-(id) jsinitWithKeyPath: (NSString *) keyPath type: (UIInterpolatingMotionEffectType) type 
{
	id resultVal__;
	resultVal__ = [[self initWithKeyPath: keyPath type: type ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation UIMotionEffect (Exports)
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
	class_addProtocol([UIMotionEffectGroup class], @protocol(UIMotionEffectGroupInstanceExports));
	class_addProtocol([UIMotionEffectGroup class], @protocol(UIMotionEffectGroupClassExports));
	class_addProtocol([UIInterpolatingMotionEffect class], @protocol(UIInterpolatingMotionEffectInstanceExports));
	class_addProtocol([UIInterpolatingMotionEffect class], @protocol(UIInterpolatingMotionEffectClassExports));
	class_addProtocol([UIMotionEffect class], @protocol(UIMotionEffectInstanceExports));
	class_addProtocol([UIMotionEffect class], @protocol(UIMotionEffectClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis"] = @0L;
	context[@"UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis"] = @1L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIMotionEffect_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
