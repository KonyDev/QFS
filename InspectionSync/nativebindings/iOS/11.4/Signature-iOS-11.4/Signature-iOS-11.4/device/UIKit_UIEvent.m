#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UIEvent class], @protocol(UIEventInstanceExports));
	class_addProtocol([UIEvent class], @protocol(UIEventClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIEventTypeTouches"] = @0;
	context[@"UIEventTypeMotion"] = @1;
	context[@"UIEventTypeRemoteControl"] = @2;
	context[@"UIEventTypePresses"] = @3;

	context[@"UIEventSubtypeNone"] = @0;
	context[@"UIEventSubtypeMotionShake"] = @1;
	context[@"UIEventSubtypeRemoteControlPlay"] = @100;
	context[@"UIEventSubtypeRemoteControlPause"] = @101;
	context[@"UIEventSubtypeRemoteControlStop"] = @102;
	context[@"UIEventSubtypeRemoteControlTogglePlayPause"] = @103;
	context[@"UIEventSubtypeRemoteControlNextTrack"] = @104;
	context[@"UIEventSubtypeRemoteControlPreviousTrack"] = @105;
	context[@"UIEventSubtypeRemoteControlBeginSeekingBackward"] = @106;
	context[@"UIEventSubtypeRemoteControlEndSeekingBackward"] = @107;
	context[@"UIEventSubtypeRemoteControlBeginSeekingForward"] = @108;
	context[@"UIEventSubtypeRemoteControlEndSeekingForward"] = @109;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIEvent_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
