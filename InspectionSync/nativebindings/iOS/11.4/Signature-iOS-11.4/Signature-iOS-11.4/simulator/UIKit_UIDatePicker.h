#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDatePicker_symbols(JSContext*);
@protocol UIDatePickerInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic,strong) NSDate * minimumDate;
@property (nonatomic) NSTimeInterval countDownDuration;
@property (nonatomic,strong) NSDate * maximumDate;
@property (nonatomic,strong) NSLocale * locale;
@property (nonatomic,strong) NSTimeZone * timeZone;
@property (nonatomic,strong) NSDate * date;
@property (nonatomic) UIDatePickerMode datePickerMode;
@property (copy,nonatomic) NSCalendar * calendar;
@property (nonatomic) NSInteger minuteInterval;
-(void) setDate: (NSDate *) date animated: (BOOL) animated ;
@end
@protocol UIDatePickerClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop