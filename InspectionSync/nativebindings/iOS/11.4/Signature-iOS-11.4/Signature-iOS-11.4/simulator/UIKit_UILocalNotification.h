#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILocalNotification_symbols(JSContext*);
@protocol UILocalNotificationInstanceExports<JSExport, NSCopyingInstanceExports_, NSCodingInstanceExports_>
@property (copy,nonatomic) NSString * category;
@property (nonatomic) NSCalendarUnit repeatInterval;
@property (nonatomic) NSInteger applicationIconBadgeNumber;
@property (copy,nonatomic) NSDate * fireDate;
@property (copy,nonatomic) NSString * alertLaunchImage;
@property (copy,nonatomic) CLRegion * region;
@property (copy,nonatomic) NSString * soundName;
@property (copy,nonatomic) NSString * alertBody;
@property (copy,nonatomic) NSCalendar * repeatCalendar;
@property (copy,nonatomic) NSString * alertTitle;
@property (copy,nonatomic) NSDictionary * userInfo;
@property (copy,nonatomic) NSString * alertAction;
@property (copy,nonatomic) NSTimeZone * timeZone;
@property (nonatomic) BOOL hasAction;
@property (assign,nonatomic) BOOL regionTriggersOnce;
-(id) jsinit;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UILocalNotificationClassExports<JSExport, NSCopyingClassExports_, NSCodingClassExports_>
@end
#pragma clang diagnostic pop