#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDevice_symbols(JSContext*);
@protocol UIDeviceInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL proximityState;
@property (getter=isGeneratingDeviceOrientationNotifications,readonly,nonatomic) BOOL generatesDeviceOrientationNotifications;
@property (readonly,nonatomic,strong) NSString * name;
@property (readonly,nonatomic) UIUserInterfaceIdiom userInterfaceIdiom;
@property (readonly,nonatomic,strong) NSString * localizedModel;
@property (getter=isBatteryMonitoringEnabled,nonatomic) BOOL batteryMonitoringEnabled;
@property (getter=isProximityMonitoringEnabled,nonatomic) BOOL proximityMonitoringEnabled;
@property (getter=isMultitaskingSupported,readonly,nonatomic) BOOL multitaskingSupported;
@property (readonly,nonatomic,strong) NSString * systemVersion;
@property (readonly,nonatomic) UIDeviceBatteryState batteryState;
@property (readonly,nonatomic,strong) NSString * systemName;
@property (readonly,nonatomic,strong) NSString * model;
@property (readonly,nonatomic,strong) NSUUID * identifierForVendor;
@property (readonly,nonatomic) float batteryLevel;
@property (readonly,nonatomic) UIDeviceOrientation orientation;
-(void) endGeneratingDeviceOrientationNotifications;
-(void) beginGeneratingDeviceOrientationNotifications;
-(void) playInputClick;
@end
@protocol UIDeviceClassExports<JSExport>
+(UIDevice *) currentDevice;
@end
@protocol UIInputViewAudioFeedbackInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) BOOL enableInputClicksWhenVisible;
@end
@protocol UIInputViewAudioFeedbackClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop